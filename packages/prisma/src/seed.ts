import { db } from "./client";

async function main(): Promise<void> {
  // Clean up existing data
  await db.post.deleteMany();
  await db.user.deleteMany();

  // Create users
  const user1 = await db.user.create({
    data: {
      email: "john@example.com",
      name: "John Doe",
    },
  });

  const user2 = await db.user.create({
    data: {
      email: "jane@example.com",
      name: "Jane Smith",
    },
  });

  // Create posts
  await db.post.createMany({
    data: [
      {
        title: "Hello World",
        content: "This is my first post!",
        published: true,
        authorId: user1.id,
      },
      {
        title: "Draft Post",
        content: "This is a draft post.",
        published: false,
        authorId: user2.id,
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
