import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
    .then(async () => {
        const userRepo = AppDataSource.getRepository(User);

        // Create a new user
        const user = new User();
        user.name = "ok";
        user.email = "ok@ok.com";
        await userRepo.save(user);

        // Fetch and print all users
        const allUsers = await userRepo.find();
        console.log("📌 Users:", allUsers);
    })
    .catch((error) => console.log(error));
