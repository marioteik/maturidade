import { FormField } from './../../models/entity';
import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { EntityService } from './../../services/entity.service';
import { Entity } from '../../models/entity';

@Component({
    selector: 'app-add-entity',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})

export class AddEntitiesComponent implements OnChanges {
    entity: Entity;
    entityForm: FormGroup;
    nameChangeLog: string[] = [];

    constructor(
        private fb: FormBuilder,
        private entityService: EntityService,
        private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params.subscribe((params: Params) => {
            const entityID = params['id'];
            if (entityID) {
                this.entityService.get(entityID)
                    .subscribe(
                        data => {
                            this.entity = data;
                            this.rebuildForm();
                        }
                    );
            }
        });

        this.createForm();
    }

    createForm() {
        this.entityForm = this.fb.group({
            name: '',
            formSchema: this.fb.array([]),
            route: ''
        });
    }

    ngOnChanges() {
        this.rebuildForm();
    }

    rebuildForm() {
        this.entityForm.reset({
            name: this.entity.name,
            route: this.entity.route
        });
        this.setFormSchema(this.entity.formSchema);
    }

    get formSchema(): FormArray {
        return this.entityForm.get('formSchema') as FormArray;
    }

    setFormSchema(formFields: FormField[]) {
        const formField = formFields.map(field => this.fb.group(field));
        const formSchemaFromArray = this.fb.array(formField);
        this.entityForm.setControl('formSchema', formSchemaFromArray);
    }

    addField() {
        this.formSchema.push(this.fb.group(new FormField()));
    }

    onSubmit() {
        let transaction: any = this.entity;

        this.entity = this.prepareSaveEntity();

        transaction = transaction ? this.entityService.update(this.entity) : this.entityService.create(this.entity);

        transaction.subscribe();

        this.rebuildForm();
    }

    prepareSaveEntity(): Entity {
        const formModel = this.entityForm.value;

        const formSchemaDeepCopy: FormField[] = formModel.formSchema.map(
            (field: FormField) => Object.assign({}, field)
        );

        const saveEntity: Entity = {
            _id: this.entity ? this.entity._id : undefined,
            name: formModel.name as string,
            route: formModel.route as string,
            formSchema: formSchemaDeepCopy
        };
        return saveEntity;
    }

    revert() { this.rebuildForm(); }
}
