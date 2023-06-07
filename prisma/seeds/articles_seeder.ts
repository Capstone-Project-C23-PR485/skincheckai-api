import { PrismaClient } from '@prisma/client';

export default async function seedArticles(prismaClient: PrismaClient) {
  await prismaClient.article.createMany({
    data: [
      {
        title: 'How to get rid of acne',
        description:
          'Acne is a common skin condition that affects most people at some point. It causes spots, oily skin and sometimes skin that’s hot or painful to touch.',
        image:
          'https://plus.unsplash.com/premium_photo-1679064286466-6e1ee9d3a44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'How to make your skin glow',
        description:
          'Glowing skin is skin that is moist and soft—not dull, dry or flaky,’ says Dr. Tina Funt. ‘Glowing skin is characterized by small pores, even complexion and clear skin without blemishes.',
        image:
          'https://images.unsplash.com/photo-1609357912334-e96886c0212b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Best way to make your skin look younger',
        description:
          'The best way to make your skin look younger is to protect it from damage. Smoking, drinking and too much sun will age you quickly, so take care of your skin by using sunscreen and avoiding smoking and drinking.',
        image:
          'https://images.unsplash.com/photo-1599847987657-881f11b92a75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'How to apply serum on face',
        description:
          'Serums are super-concentrated, nutrient-dense treatments that address specific concerns, so it’s better to keep them as close to the skin as possible.',
        image:
          'https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'How to apply sunscreen',
        description:
          'Sunscreen should be applied to all exposed skin, including the face, neck and ears. If you’re going to wear clothing, it’s a good idea to apply sunscreen to areas not covered by clothing, such as the hands and feet.',
        image:
          'https://images.unsplash.com/photo-1585945037805-5fd82c2e60b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  });
}
