import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  selectedImages: { [key: number]: string } = {};
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 13 128GB',
      description: 'Powerful smartphone with a high-quality camera and smooth performance. Great for everyday use, photos, and apps.',
      price: 289990,
      rating: 4.8,
      image: "images/iphone13.jpg",
      images: [
        'images/iphone13b.jpg',
        'images/iphone13.jpg',
        'images/iphone13b.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy A54',
      description: 'A stylish smartphone with a bright screen and reliable battery life. Suitable for study, communication, and photos.',
      price: 179990,
      rating: 4.7,
      image: 'images/samsung-a54f.jpg',
      images: [
        'images/samsung-a54f.jpg',
        'images/samsung-a54b.jpg',
        'images/samsung-a54f.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-128-gb-chernyi-108174072/'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13',
      description: 'A practical smartphone with a good balance of price and features. A solid choice for daily tasks.',
      price: 99990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/hc7/84958082682910.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1f/hc7/84958082682910.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hf4/84958082715678.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h3f/84958082748446.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-8-gb-256-gb-chernyi-115939439/'
    },
    {
      id: 4,
      name: 'Apple AirPods 3',
      description: 'Wireless earphones with clear sound and a comfortable fit. Perfect for music, calls, and everyday use.',
      price: 89990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h04/h11/63952401494046.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h11/63952401494046.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h8e/h84/63952404213790.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h15/63952407031838.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-102667782/'
    },
    {
      id: 5,
      name: 'ASUS TUF Gaming A15',
      description: 'A productive laptop for study, work, and gaming. It has powerful hardware and modern design.',
      price: 459990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p39/p8b/26078964.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p8b/26078964.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p2d/pf4/26078965.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p10/p7d/26078966.png'
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa507nur-lp066-15-6-16-gb-ssd-512-gb-win-11-home-90nr0j12-m00520-seryi-133617736/'
    },
    {
      id: 6,
      name: 'Lenovo IdeaPad Slim 3',
      description: 'A convenient laptop for studying and office work. A good choice for students and daily tasks.',
      price: 219990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p54/p0e/19824726.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p54/p0e/19824726.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/p0d/19824727.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/p6c/p07/19824728.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15amn8-15-6-16-gb-ssd-512-gb-no-os-82xq00bfrk-seryi-114863386/'
    },
    {
      id: 7,
      name: 'Logitech G102',
      description: 'A gaming mouse with an ergonomic shape and precise sensor. Good for both gaming and regular use.',
      price: 12990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h4e/63832782204958.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h59/h4e/63832782204958.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/h4a/63832784826494.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h84/h4d/63832787546142.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100896706/'
    },
    {
      id: 8,
      name: 'Acer Nitro VG240Y',
      description: 'A monitor with accurate colors and smooth refresh rate. Suitable for work, films, and gaming.',
      price: 89990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7f/h3f/64038808895518.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7f/h3f/64038808895518.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/h66/64038811516958.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1f/h36/64038814138430.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/acer-nitro-vg240y-um-qv0ee-001-chernyi-100807061/'
    },
    {
      id: 9,
      name: 'JBL Charge 5',
      description: 'A portable speaker with powerful sound and long battery life. Great for home use and travel.',
      price: 84990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h3b/64342967070750.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h3b/64342967070750.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/ha1/64342969692222.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h4d/64342972313694.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/jbl-charge-5-chernyi-102982574/'
    },
    {
      id: 10,
      name: 'Apple Watch SE',
      description: 'A smart watch for tracking activity, notifications, and calls. A useful device for daily life.',
      price: 149990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/hf1/64305700143134.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/hf1/64305700143134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/hce/64305702764606.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h70/h07/64305705386078.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-2022-gps-40-mm-aluminium-case-starlight-sport-band-s-m-starlight-107296417/'
    }
  ];
  setMainImage(productId: number, image: string): void {
  this.selectedImages[productId] = image;
  } 
  

  getMainImage(product: Product): string {
  return this.selectedImages[product.id] || product.image;
  }
  shareOnWhatsApp(product: Product): void {
    const text = `Check out this product: ${product.name} ${product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(product: Product): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }

  getStars(rating: number): string {
    const fullStars = Math.round(rating);
    return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  }
}