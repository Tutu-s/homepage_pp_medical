# 🚑 FIX LOG

## 2026-02-07: Image Query String Error
- **Issue**: Next.js threw `runtime error` because `next/image` does not support query strings (e.g., `?v=2`) on local image paths by default.
- **Error**: `Image with src "/images/doctor-profile.jpg?v=2" is using a query string which is not configured in images.localPatterns.`
- **Fix**: Renamed the physical file from `doctor-profile.jpg` to `doctor-profile-v2.jpg` and updated `medical-content.json`. This achieves cache busting in a Next.js-compliant way.

## 2026-02-07: Image Update Failure
- **Issue**: User updated `doctor-profile.jpg` and `medical-content.json`, but the website still showed the old image or no change.
- **Cause**: `ExpertiseSection.tsx` had a **hardcoded path** (`src="/images/doctor-profile.jpg"`) instead of using the data from `medical-content.json`.
- **Fix**: Updated `ExpertiseSection.tsx` to use `{doctor.image}`. Now updates in `medical-content.json` (including cache-busting `?v=x`) will be correctly reflected.

## 2026-02-07: Build Error (sans is not defined)
- **Issue**: Server crashed with checking `sans.variable`.
- **Cause**: `Playfair_Display` variable was removed but referenced in `className`.
- **Fix**: Removed `sans.variable` from `layout.tsx` HTML tag class.

## 2026-02-07: Hydration Mismatch
- **Issue**: Warning regarding hydration on client vs server.
- **Fix**: Added `suppressHydrationWarning` to `html` and `body` tags.
