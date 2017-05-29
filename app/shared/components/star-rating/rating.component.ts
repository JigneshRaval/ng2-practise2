import { Component } from "@angular/core";

@Component({
    selector: 'rating-star',
    templateUrl: 'rating.component.html',
    styleUrls: ['rating.component.css']
})
export class RatingComponent {
    private rating: number = 3;

    private range: Array<number> = [1, 2, 3, 4, 5];
}