import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  VERSION,
  ViewChildren
} from "@angular/core";

import { CurrencyPipe } from "@angular/common";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { CartService } from "./cart.service";
@Component({
  selector: "my-app",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  // @ViewChildren('myitems') subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<
    ElementRef
  >;

  constructor(
    public cartService: CartService,
    private currencyPipe: CurrencyPipe // private builder: FormBuilder
  ) { }

  items = [];
  sampleSuggestionsArray = [
    [
      {
        id: 7,
        name: "Vegtable Pizza",
        price: 60.0,
        image: "https://i.imgur.com/oe83Oed.jpg",
        description: "Italian Pizza with vegtable ",
        "boughtItemsCount": 0,
        category: "Pizza",
        addedToCart: false,
        qtyTotal: 0

      },
      {
        id: 8,
        name: "Chicken Burger",
        price: 55.0,
        image: "https://i.imgur.com/rmFPp4M.jpg",
        description: "Chicken sandwitch with mayonise",
        boughtItemsCount: 0,
        category: "Burger",
        addedToCart: false,
        qtyTotal: 0

      }
      // {
      //   "id": 9,
      //   "name": "Beef Burger",
      //   "price": 78.0,
      //   "image": "https://i.imgur.com/uCNJp2x.jpg",
      //   "description": "Beef sandwitch with bacon",
      //   "boughtItemsCount": 0,
      //   "category": "Burger",
      //   "addedToCart": false
      // },
      // {
      //   "id": 10,
      //   "name": "Strawberry juice",
      //   "price": 30.0,
      //   "image": "https://i.imgur.com/W3t9qDa.jpg",
      //   "description": "Strawberry juice sugar free",
      //   "boughtItemsCount": 0,
      //   "category": "Juice",
      //   "addedToCart": false
      // },
      // {
      //   "id": 12,
      //   "name": "Red Orange juice",
      //   "price": 35.0,
      //   "image": "https://i.imgur.com/o5Myn6O.jpg",
      //   "description": "orange juice",
      //   "boughtItemsCount": 0,
      //   "category": "Juice",
      //   "addedToCart": false
      // },
      // {
      //   "id": 14,
      //   "name": "Salami pizza",
      //   "price": 70.0,
      //   "image": "https://i.imgur.com/OVNYP4f.jpg",
      //   "description": "Salami pizza large",
      //   "boughtItemsCount": 0,
      //   "category": "Pizza",
      //   "addedToCart": false
      // }
    ]
    
  ];

  //----- calculate total
   total() {
    return this.items.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        price: sum.price + x.qtyTotal * x.price
      }),
      { qtyTotal: 1, price: 0 }
    ).price;
  }

  changeSubtotal(item: { qtyTotal: any; price: any; }, index: string | number) {
    const qty = item.qtyTotal;
    const amt = item.price;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, " EGP ");

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
  }

  //----- remove specific item
  removeFromCart(item) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  //----- clear cart item
  clearCart(items) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

  //----- add item to cart
  addToCart(item) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = item.qtyTotal+ 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }
  }

  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }
}
