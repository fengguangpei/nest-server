-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `order_details` (
	`orderId` int NOT NULL,
	`productId` int NOT NULL,
	`quantity` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` int NOT NULL,
	`orderDate` date NOT NULL,
	`shippedDate` date,
	`shipAddress` varchar(255) NOT NULL,
	`shipPostalCode` varchar(255),
	`shipCountry` varchar(255) NOT NULL,
	CONSTRAINT `orders_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`supplierId` int NOT NULL,
	`unitPrice` decimal(10,4) NOT NULL,
	`unitsInStock` int NOT NULL,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `suppliers` (
	`id` int NOT NULL,
	`companyName` varchar(255) NOT NULL,
	`city` varchar(255),
	`country` varchar(255) NOT NULL,
	CONSTRAINT `suppliers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `order_details` ADD CONSTRAINT `order_details_orderId_orders_id_fk` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `order_details` ADD CONSTRAINT `order_details_productId_products_id_fk` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `products` ADD CONSTRAINT `products_supplierId_suppliers_id_fk` FOREIGN KEY (`supplierId`) REFERENCES `suppliers`(`id`) ON DELETE no action ON UPDATE no action;
*/