import { Category, Item } from '@/app/types/global';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

  
export async function GET (){
  console.log('enter in get-----')
    const categories: Category[] = [
        { id: 1, title: 'Breakfast'},
        { id: 2, title: 'Lunch'},
        { id: 3, title: 'Dinner'},
    ]
    const items: Item[] = [
      { id: 1, categoryId: 1, title: 'Salates', img: '/restaurant-images/burger.png', price: '2', description: 'Lorem ipsum' },
      { id: 2, categoryId: 1,  title: 'Meal', img: '/restaurant-images/fish-and-chips.png', price: '2', description: 'Lorem Ipsum' },
      { id: 3, categoryId: 1,  title: 'Drink', img: '/restaurant-images/drinks.png', price: '2', description: 'Lorem Ipsum' },
      { id: 1, categoryId: 1, title: 'Salates', img: '/restaurant-images/burger.png', price: '2', description: 'Lorem ipsum' },
      { id: 2, categoryId: 1,  title: 'Meal', img: '/restaurant-images/fish-and-chips.png', price: '2', description: 'Lorem Ipsum' },
      { id: 3, categoryId: 1,  title: 'Drink', img: '/restaurant-images/drinks.png', price: '2', description: 'Lorem Ipsum' },
      { id: 1, categoryId: 1, title: 'Salates', img: '/restaurant-images/burger.png', price: '2', description: 'Lorem ipsum' },
      { id: 2, categoryId: 1,  title: 'Meal', img: '/restaurant-images/fish-and-chips.png', price: '2', description: 'Lorem Ipsum' },
      { id: 3, categoryId: 1,  title: 'Drink', img: '/restaurant-images/drinks.png', price: '2', description: 'Lorem Ipsum' },

      { id: 4, categoryId: 2, title: 'Salates', img: '/restaurant-images/burger.png', price: '2', description: 'Lorem ipsum' },
      { id: 5, categoryId: 2,  title: 'Meal', img: '/restaurant-images/fish-and-chips.png', price: '2', description: 'Lorem Ipsum' },
      { id: 6, categoryId: 2,  title: 'Drink', img: '/restaurant-images/drinks.png', price: '2', description: 'Lorem Ipsum' },
      { id: 7, categoryId: 3, title: 'Salates', img: '/restaurant-images/burger.png', price: '2', description: 'Lorem ipsum' },
      { id: 8, categoryId: 3,  title: 'Meal', img: '/restaurant-images/fish-and-chips.png', price: '2', description: 'Lorem Ipsum' },
      { id: 9, categoryId: 3,  title: 'Drink', img: '/restaurant-images/drinks.png', price: '2', description: 'Lorem Ipsum' },

    ];
    return NextResponse.json({items, categories});
}
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log('enter in handler-------', req.method)
//   if (req.method === 'GET') {
//     const categories = [
//         { id: 1, title: 'Breakfast'},
//         { id: 2, title: 'Lunch'},
//         { id: 3, title: 'Dinner'},
//     ]
//     const items: Item[] = [
//       { id: 1, categoryId: 1, title: 'Salates', img: '/restaurant-images/burger.png', price: '2', description: 'Lorem ipsum' },
//       { id: 2, categoryId: 1,  title: 'Meal', img: '/restaurant-images/fish-and-chips.png', price: '2', description: 'Lorem Ipsum' },
//       { id: 3, categoryId: 1,  title: 'Drink', img: '/restaurant-images/drinks.png', price: '2', description: 'Lorem Ipsum' },
//       { id: 4, categoryId: 2, title: 'Salates', img: '/restaurant-images/burger.png', price: '2', description: 'Lorem ipsum' },
//       { id: 5, categoryId: 2,  title: 'Meal', img: '/restaurant-images/fish-and-chips.png', price: '2', description: 'Lorem Ipsum' },
//       { id: 6, categoryId: 2,  title: 'Drink', img: '/restaurant-images/drinks.png', price: '2', description: 'Lorem Ipsum' },
//       { id: 7, categoryId: 3, title: 'Salates', img: '/restaurant-images/burger.png', price: '2', description: 'Lorem ipsum' },
//       { id: 8, categoryId: 3,  title: 'Meal', img: '/restaurant-images/fish-and-chips.png', price: '2', description: 'Lorem Ipsum' },
//       { id: 9, categoryId: 3,  title: 'Drink', img: '/restaurant-images/drinks.png', price: '2', description: 'Lorem Ipsum' },

//     ];
//     res.status(200).json({items, categories});
//   } else if (req.method === 'POST') {
//     const newUser: Item = req.body; // Assuming user data is sent in the request body
//     newUser.id = Date.now();  // Simulate auto-generated ID
//     res.status(201).json(newUser);  // Send the new user data back
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
