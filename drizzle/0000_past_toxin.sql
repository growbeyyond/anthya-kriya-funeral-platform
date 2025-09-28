CREATE TABLE `emergency_bookings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`contact_name` text NOT NULL,
	`contact_phone` text NOT NULL,
	`relationship` text,
	`location_address` text NOT NULL,
	`city` text NOT NULL,
	`faith_tradition` text,
	`notes` text,
	`status` text DEFAULT 'new' NOT NULL,
	`priority` text DEFAULT 'normal',
	`scheduled_at` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`created_by` text
);
--> statement-breakpoint
CREATE TABLE `memorials` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`cover_image_url` text,
	`person_name` text NOT NULL,
	`date_of_birth` integer,
	`date_of_passing` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`created_by` text
);
