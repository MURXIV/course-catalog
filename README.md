# Course Catalog

A simple student project for Advanced Web Technologies.

## Run the project

```bash
npm ci
npm run dev
```

Open the local address shown in the terminal.

## Lab 2

I styled the course cards and navigation with Tailwind CSS and shadcn/ui. The catalog shows one column on phones, two on tablets, and three on desktops. The design uses a black-and-white palette with neutral gray borders and text.

## All four bonus tasks

1. **Custom color:** `--color-study-ink` is defined in the `@theme` block in `app/globals.css` and used by the home page button.
2. **Dark mode:** the site follows your device setting through `prefers-color-scheme`. Cards and navigation use `dark:` classes. No toggle or extra JavaScript is needed.
3. **Custom button variant:** `variant="study"` in `components/ui/button.tsx` gives the home page button our custom charcoal color.
4. **Extra shadcn component:** `Badge` shows course credits on each card.

The optional active navigation highlight is also included. `NavBar` uses `usePathname`, while the layout and course cards stay Server Components. The final grid keeps the required 1/2/3 columns; the suggested four-column exercise is not enabled because the acceptance checklist asks for three desktop columns.

## Simple explanation

- **Tailwind CSS** gives us small classes for styling. For example, `p-6` adds padding and `gap-4` adds space between items.
- **shadcn/ui** adds component source files to `components/ui`. We use `Card` to group the course information and `Button` for a consistent button style.
- **CourseCard** receives the course information through props. `CardHeader` holds the title. `CardContent` holds the description, credits, and likes.
- **Responsive grid:** `grid-cols-1` means one column. `sm:grid-cols-2` means two columns from 640px. `lg:grid-cols-3` means three columns from 1024px.
- **Hover:** `hover:shadow-md` and `hover:border-neutral-300` change the card when the mouse is over it. `transition` makes the change smooth.
- **Server Component:** `CourseCard` has no `use client` because it does not use state or event handlers.
- **LikeButton** is a Client Component because it uses `useState` and `onClick`. Clicking it on the course detail page adds one like. Refreshing resets the count.

The whole catalog card is a link. Its like count uses `<Button asChild>` with a span so there is no HTML button nested inside a link. The actual working like button stays on the detail page, as in Lab 1.

## Main files

| File | Purpose |
| --- | --- |
| `app/layout.tsx` | Shared navigation, page container, and footer |
| `app/courses/page.tsx` | Gets the courses and displays the responsive grid |
| `components/CourseCard.tsx` | Displays one course with shadcn components |
| `components/LikeButton.tsx` | Handles the like counter on the detail page |
| `components/ui/` | Reusable shadcn Button and Card components |
| `app/globals.css` | Tailwind import, theme colors, and basic styles |
| `lib/courses.ts` | Original course data and data functions |

## Check before submission

```bash
npm run lint
npm run build
```

In browser DevTools, open `/courses` and test 375px, 768px, and 1280px. You should see 1, 2, and 3 columns. Open a course and click the like button. Also check Home, About, and `/courses/does-not-exist`.

## Short explanation for class

“In this lab, I changed the appearance of my course catalog. I used shadcn Card and Button components. Tailwind classes control the spacing, colors, and responsive grid. The card is still a Server Component. The like button uses client-side state, and the navigation uses the current path.”

## Submission

Repository: https://github.com/MURXIV/course-catalog

Send this repository link to your instructor through the required submission channel.
