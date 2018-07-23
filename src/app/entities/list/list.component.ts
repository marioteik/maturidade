import { Component, OnInit } from '@angular/core';
import { Entity } from '../../models/entity';
import { EntityService } from '../../services/entity.service';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class EntitiesListComponent implements OnInit {

    public entities: Entity[] = [];

    constructor(
        private entityService: EntityService,
        private utilsService: UtilsService
    ) { }

    ngOnInit() {
        this.entityService.list()
            .subscribe(
                data => {
                    this.entities = data;
                },
                err => {
                    console.log(err);
                }
            );
    }

    deleteEntity(id) {
        this.entityService.delete(id)
            .subscribe(
                data => {
                    if (data == null) {
                        this.entities = this.utilsService.removeFromArray(this.entities, {_id: id});
                    }
                },
                err => console.log(err)
            );
    }
}
