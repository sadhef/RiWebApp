// server/scripts/createAdmin.js
import dotenv from 'dotenv';
import * as argon2 from 'argon2';
import connectDB from '../config/database.js';
import Owner from '../models/owner.model.js';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from parent directory's .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });

async function createAdmin() {
    try {
        // Verify environment variables
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        // Connect to MongoDB
        await connectDB();
        console.log(chalk.green('✓ Connected to MongoDB'));

        // Define admin credentials
        const adminData = {
            name: "RiField Admin",
            email: "admin@sadhef.com",
            phone: "1234567890",
            password: "Admin@4848",
            role: "admin"
        };

        // Check if admin already exists
        const existingAdmin = await Owner.findOne({ email: adminData.email });
        if (existingAdmin) {
            console.log(chalk.yellow('⚠️ Admin already exists with this email'));
            console.log(chalk.cyan('\nExisting Admin Email:'), chalk.white(adminData.email));
            process.exit(0);
        }

        // Hash the password
        const hashedPassword = await argon2.hash(adminData.password);

        // Create new admin
        const admin = new Owner({
            ...adminData,
            password: hashedPassword
        });

        // Save admin to database
        await admin.save();
        
        // Success message
        console.log(chalk.green('\n✓ Admin created successfully'));
        console.log(chalk.cyan('\nAdmin Credentials:'));
        console.log(chalk.cyan('Email:'), chalk.white(adminData.email));
        console.log(chalk.cyan('Password:'), chalk.white(adminData.password));
        console.log(chalk.cyan('\nAPI Endpoints:'));
        console.log(chalk.cyan('Login URL:'), chalk.white('POST http://localhost:5000/api/owner/auth/login'));
        console.log(chalk.cyan('Frontend URL:'), chalk.white('http://localhost:5173/login'));
        
        console.log(chalk.yellow('\n⚠️ Important:'));
        console.log(chalk.yellow('- Change the default password after first login'));
        console.log(chalk.yellow('- Keep these credentials secure'));
        console.log(chalk.yellow('- Do not share the admin access'));

    } catch (error) {
        console.error(chalk.red('\n✖ Error creating admin:'), error.message);
    } finally {
        // Exit the script
        process.exit(0);
    }
}

// Run the admin creation script
createAdmin();