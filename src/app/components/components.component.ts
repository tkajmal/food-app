import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: { year: number, month: number };
    model: NgbDateStruct;
    restaurants = [
        {
            restaurantImage: 'assets/img/1.jfif',
            restaurantName: 'Tulum Restaurant',
            availableStatus: true,
            foods : [
                {
                    foodName:'Manousheh',
                    foodImage:'assets/img/R1Food/R1Food1.jpg',
                    foodPrice:30,
                },
                {
                    foodName:'Iranian Sangak',
                    foodImage:'assets/img/R1Food/R1Food2.jpg',
                    foodPrice:300,
                },
                {
                    foodName:'Chelo Kebab',
                    foodImage:'assets/img/R1Food/R1Food3.jpg',
                    foodPrice:40,
                },
                {
                    foodName:'Al Harees',
                    foodImage:'assets/img/R1Food/R1Food4.jpg',
                    foodPrice:150,
                },
                {
                    foodName:'Al Machboos',
                    foodImage:'assets/img/R1Food/R1Food5.jpg',
                    foodPrice:200,
                },
                {
                    foodName:'Mandi',
                    foodImage:'assets/img/R1Food/R1Food6.jpg',
                    foodPrice:50,
                },

            ]
        },
        {
            restaurantImage: 'assets/img/2.jfif',
            restaurantName: 'The Viewing Deck',
            availableStatus: true,
            foods:[
                {
                    foodName:'Oozie',
                    foodImage:'assets/img/R2Food/R2Food1.jpg',
                    foodPrice:50, 
                },
                {
                    foodName:'Tabbouleh',
                    foodImage:'assets/img/R2Food/R2Food2.jpg',
                    foodPrice:30, 
                },
                {
                    foodName:'Kousa Mahshi',
                    foodImage:'assets/img/R2Food/R2Food3.jpg',
                    foodPrice:70, 
                },
                {
                    foodName:'Shirin Polo',
                    foodImage:'assets/img/R2Food/R2Food4.jpg',
                    foodPrice:300, 
                },
                {
                    foodName:'Baba Ganoush',
                    foodImage:'assets/img/R2Food/R2Food5.jpg',
                    foodPrice:100, 
                },
                {
                    foodName:'Fatteh',
                    foodImage:'assets/img/R2Food/R2Food6.jpg',
                    foodPrice:40, 
                }
            ]
        },
        {
            restaurantImage: 'assets/img/3.jfif',
            restaurantName: 'Creek',
            availableStatus: true,
            foods: [
                {
                    foodName:'Taboon Bread',
                    foodImage:'assets/img/R3Food/R3Food1.jpg',
                    foodPrice:300, 
                },
                {
                    foodName:'Shawarma',
                    foodImage:'assets/img/R3Food/R3Food2.jpg',
                    foodPrice:34, 
                },
                {
                    foodName:'Samboosa',
                    foodImage:'assets/img/R3Food/R3Food3.jpg',
                    foodPrice:30, 
                },
                {
                    foodName:'Chips Roll',
                    foodImage:'assets/img/R3Food/R3Food4.jpg',
                    foodPrice:100, 
                },
                {
                    foodName:'Mahalabiya',
                    foodImage:'assets/img/R3Food/R3Food5.jpg',
                    foodPrice:15, 
                },
                {
                    foodName:'Luqaimat',
                    foodImage:'assets/img/R3Food/R3Food6.jpg',
                    foodPrice:150, 
                }
            ]
        },
        {
            restaurantImage: 'assets/img/4.jfif',
            restaurantName: 'Top Chicken',
            availableStatus: false
        },
        {
            restaurantImage: 'assets/img/5.jfif',
            restaurantName: 'Dine out at the At.mosphere',
            availableStatus: true,
            foods: [
                {
                    foodName:'Kellaj',
                    foodImage:'assets/img/R5Food/R5Food1.jpg',
                    foodPrice:70, 
                },
                {
                    foodName:'Falafel',
                    foodImage:'assets/img/R5Food/R5Food2.jpg',
                    foodPrice:120, 
                },
                {
                    foodName:'Fattoush',
                    foodImage:'assets/img/R5Food/R5Food3.jpg',
                    foodPrice:300, 
                },
                {
                    foodName:'Madrouba',
                    foodImage:'assets/img/R5Food/R5Food4.jpg',
                    foodPrice:24, 
                },
                {
                    foodName:'Shish Tawook',
                    foodImage:'assets/img/R5Food/R5Food5.jpg',
                    foodPrice:50, 
                },
                {
                    foodName:'Lahem Bl Ajin',
                    foodImage:'assets/img/R5Food/R5Food6.jpg',
                    foodPrice:31, 
                }
            ]
        },
        {
            restaurantImage: 'assets/img/6.jfif',
            restaurantName: 'Level 43 Sky Lounge',
            availableStatus: false
        }
    ];
    constructor(private renderer: Renderer2,
        private _router : Router) { }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }
    selectRestuarant(data){
        console.log(data);
        // this.index = index;
        // this.router.navigateByUrl('/admin/allStoreProduct',{state : {shopDetails : {_id : this.storeID },index : 0}});
        this._router.navigate(['/restuarant/food']  , {state: {restuarantDetails : data}})  }
}
