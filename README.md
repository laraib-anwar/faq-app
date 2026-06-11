# FAQ Accordion

A React-based FAQ Accordion component that allows users to expand and collapse answers by clicking on the corresponding question.

## Features

* Display a list of frequently asked questions
* Expand a question to reveal its answer
* Collapse an open question by clicking it again
* Only one FAQ item remains open at a time
* Dynamic toggle icons (`+` / `-`)
* Clean and responsive UI

## Tech Stack

* React
* JavaScript (ES6+)
* React Hooks (`useState`)
* CSS Flexbox

## Implementation Details

### State Management

The application uses a single state variable:


const [openId, setOpenId] = useState(null);


* `openId` stores the ID of the currently expanded FAQ item.
* `null` indicates that all FAQ items are collapsed.

### Toggle Logic

When a user clicks the toggle icon:

* If the clicked FAQ is already open, it is collapsed.
* Otherwise, the selected FAQ is expanded and any previously opened FAQ is closed.

### Conditional Rendering

Answers are rendered only when their corresponding FAQ item is active:


{openId === item.id && <h4>{item.answer}</h4>}


This minimizes unnecessary rendering and keeps the UI clean.

## Concepts Demonstrated

* React Functional Components
* State Management with `useState`
* Conditional Rendering
* Event Handling
* Dynamic List Rendering using `map()`
* Component-based UI Design

## Project Structure


src/
├── components/
│   ├── faq.jsx
│   └── faq.css
├── App.jsx
└── main.jsx


## Running the Project


npm install
npm run dev


## Possible Enhancements

* Support multiple expanded FAQs simultaneously
* Add smooth expand/collapse animations
* Fetch FAQ data from an API
* Add search/filter functionality
* Improve accessibility with keyboard navigation
