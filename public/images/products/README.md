# Product Images Folder

This folder (`/public/images/products/`) is the designated place to host your real clinic product images.

## Setup Instructions

1. Prepare your product images in JPEG, PNG, or WebP format.
2. Rename each image file to match the naming convention defined in `/src/data.ts` (or modify `src/data.ts` to use your preferred filenames).
3. Drop the images into this directory (`/public/images/products/`).

## Product-to-Filename Mapping

By default, the application is pre-configured to look for the following filenames in this directory:

### Consumables
- **Nordic Translucent Ceramic Brackets:** `translucent_brackets.jpg`
- **Clinik Universal Nano-Hybrid Composite:** `universal_composite.jpg`
- **NordicSil Light Body Wash Silicone:** `light_body_silicone.jpg`

### Instruments
- **Professional Diagnostic Instrument Set:** `diagnostic_instrument_set.jpg`
- **Orthodontic Distal Wire Cutter:** `distal_wire_cutter.jpg`

### Equipment
- **Fiber-Optic High-Speed Handpiece:** `fiber_optic_handpiece.jpg`
- **ProCart Mobile Dental Delivery Trolley:** `mobile_delivery_trolley.jpg`

### X-Ray & Imaging
- **NordicScan USB Intraoral Sensor:** `usb_intraoral_sensor.jpg`
- **DentalScan Portable Handheld X-Ray:** `portable_handheld_xray.jpg`

### Sterilization
- **NordicClave Class B Steam Sterilizer (22L):** `steam_sterilizer_22l.jpg`
- **Digital Ultrasonic Cleaner (3L):** `digital_ultrasonic_cleaner.jpg`

### Office Supplies
- **Custom Printed Patient Record Sheets (A4, 100-pack):** `patient_record_sheets.jpg`
- **Appointment & Reminder Cards (250-pack):** `appointment_reminder_cards.jpg`

## Fallback Design

If an image is not found in this directory, the application will automatically load a premium clinical medical-grade placeholder from Unsplash, ensuring your app always looks beautifully polished during construction!
