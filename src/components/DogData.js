import React from 'react';

// photos
import pug from '../img/pug.jpg';
import labrador from '../img/labrador.jpg';
import beagle from '../img/beagle.jpg';
import german from '../img/german.jpg';
import basset from '../img/basset.jpg';
import dalmatian from '../img/dalmatian.jpg';
import bernese from '../img/bernese.jpg';
import bulldog from '../img/bulldog.jpg';
import collie from '../img/collie.jpg';

export const DogData = [
  {
    breed: 'Pug',
    path: '/dogs/pug',
    origin: 'China',
    colors: 'Fawn, Apricot, and Black',
    description:
      'The pug is a breed of dog distinguished by a wrinkly, short-muzzled face and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often light brown (fawn) or black, and a compact, square body with well-developed muscles.',
    image: pug,
  },
  {
    breed: 'Labrador Retriever',
    path: '/dogs/labrador',
    origin: 'United Kingdom',
    colors: 'Yellow, White, Chocolate, Silver, and Black',
    description:
      'The Labrador Retriever, often abbreviated to Labrador, is a breed of retriever-gun dog from the United Kingdom that was developed from imported Canadian fishing dogs. The Labrador is one of the most popular dog breeds in a number of countries in the world, particularly in the Western world.',
    image: labrador,
  },
  {
    breed: 'Beagle',
    path: '/dogs/beagle',
    origin: 'England',
    colors:
      'Tri-color, Lemon & White, White & Tan, Chocolate Tri, Orange & White, Red & White, and White & Chocolate',
    description:
      'The beagle is a breed of small hound that is similar in appearance to the much larger foxhound. The beagle is a scent hound, developed primarily for hunting hare (beagling). Possessing a great sense of smell and superior tracking instincts, the beagle is the primary breed used as detection dogs for prohibited agricultural imports and foodstuffs in quarantine around the world. The beagle is intelligent. It is a popular pet due to its size, good temper, and a lack of inherited health problems.',
    image: beagle,
  },
  {
    breed: 'German Shepherd',
    path: '/dogs/german',
    origin: 'Germany',
    colors: 'Black, Sable, Grey, Black & Silver, Red & Black, and Black & Tan',
    description:
      'The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. According to the FCI, the breed\'s English language name is German Shepherd Dog. The breed was officially[who?] known as the "Alsatian Wolf Dog" in the UK from after the First World War until 1977 when its name was changed back to German Shepherd. Despite its wolf-like appearance, the German Shepherd is a relatively modern breed of dog, with their origin dating to 1899.',
    image: german,
  },
  {
    breed: 'Basset Hound',
    path: '/dogs/basset',
    origin: 'United Kingdom',
    colors:
      'Tri-color, Lemon & White, Black & White, Red & White, Black & Brown, and White & Chocolate',
    description:
      'The Basset Hound is a short-legged breed of dog in the hound family. The Basset is a scent hound that was originally bred for the purpose of hunting hare. Their sense of smell and ability to ground-scent is second only to the Bloodhound.',
    image: basset,
  },
  {
    breed: 'Dalmatian',
    path: '/dogs/dalmatian',
    origin: 'Croatia',
    colors: 'Black & White, and Liver & White',
    description:
      'The Dalmatian is a breed of large-sized dog, noted for its unique white coat marked with black or liver-colored spots. Originating as a hunting dog, it was also used as a carriage dog in its early days. The origins of this breed can be traced back to Croatia and its historical region of Dalmatia. It is thought that early ancestors of the breed were certain breeds of pointers and a spotted Great Dane. Today, it is a popular family pet and many dog enthusiasts enter Dalmatians into kennel club competitions.',
    image: dalmatian,
  },
  {
    breed: 'Bernese Mountain Dog',
    path: '/dogs/bernese',
    origin: 'Switzerland',
    colors: 'Tri-color',
    description:
      'The Bernese Mountain Dog is a large dog breed, one of the four breeds of Sennenhund-type dogs from the Swiss Alps. These dogs have roots in the Roman mastiffs. The name Sennenhund is derived from the German Senne ("alpine pasture") and Hund (hound/dog), as they accompanied the alpine herders and dairymen called Senn. Berner (or Bernese in English) refers to the area of the breed\'s origin, in the canton of Bern. This breed was originally kept as a general farm dog. Large Sennenhund in the past were also used as draft animals, pulling carts. The breed was officially established in 1912.',
    image: bernese,
  },
  {
    breed: 'English Bulldog',
    path: '/dogs/bulldog',
    origin: 'England',
    colors:
      'Red, White, Fawn, Fallow, Brindle, Chocolate, Black, Tri-Color, Blue, Lilac',
    description:
      'The Bernese Mountain Dog is a large dog breed, one of the four breeds of Sennenhund-type dogs from the Swiss Alps. These dogs have roots in the Roman mastiffs. The name Sennenhund is derived from the German Senne ("alpine pasture") and Hund (hound/dog), as they accompanied the alpine herders and dairymen called Senn. Berner (or Bernese in English) refers to the area of the breed\'s origin, in the canton of Bern. This breed was originally kept as a general farm dog. Large Sennenhund in the past were also used as draft animals, pulling carts. The breed was officially established in 1912.',
    image: bulldog,
  },
  {
    breed: 'Rough Collie',
    path: '/dogs/collie',
    origin: 'United Kingdom',
    colors:
      'Sable, Mahogany Sable, Shaded Sable, Tri-color, Blue Merle, Sable Merle, Colour Headed White, Double Merle, and White',
    description:
      'The Rough Collie (also known as the Long-Haired Collie) is a long-coated dog breed of medium to large size that, in its original form, was a type of collie used and bred for herding sheep in Scotland. More recent breeding has focused on the Collie as a show dog, and also companion. The breed specifications call for a distinctive long narrow tapered snout and tipped (semiprick) ears, so some dogs must have their ears taped when young.',
    image: collie,
  },
];
