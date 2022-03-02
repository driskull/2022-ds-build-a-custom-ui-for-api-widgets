<!-- .slide: data-background="img/2022/dev-summit/bg-1.png" data-background-size="cover" -->

<h1 style="text-align: left; font-size: 80px;"><div><small>ArcGIS API for JavaScript:</small></div> Build a custom UI for API widgets</h1>

<p style="display: flex; line-height: normal; gap: 14px; color: var(--r-section-subhead-color);"><calcite-avatar scale="l" full-name="Matt Driscoll" thumbnail="./img/matt.jpeg"></calcite-avatar>Matt Driscoll <calcite-avatar scale="l" full-name="Ryan Libed" thumbnail="./img/ryan.jpeg" style="margin-left: 14px"></calcite-avatar>Ryan Libed</p>

<p style="text-align: left; font-size: 30px;">Slides: <a href="https://esriurl.com/ds2022-custom-ui"><code>esriurl.com/ds2022-custom-ui</code></a></p>

---

# Agenda

- Widget fundamentals
- LayerList Widget
- Creating custom widget UI
  - Setup JSAPI + React
  - React + Bootstrap
  - React + Calcite Design System
- Resources
- Q & A

---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Widget Fundamentals

---

# What are widgets?

- A component of UI
- Perform a function
- Interactive
- Stateful

---

# Benefits of Widgets

- Reusable & modular
- Configurable
- Help build more complex apps

---

# Widget Architecture

ArcGIS Javascript API Widgets are composed of Views & ViewModels

- Business loogic is separate from presentation
- Reusable
- UI replacement
- Framework integration

---

# Widget Views

Presentation of the widget

- Extends `esri/widgets/Widget`
- Focused on UI & DOM structure
- Use ViewModel APIs to render UI

---

# Widget ViewModels

Business logic of the widget

- Extends `esri/core/Accessor`
- Provides APIs to support View
- Focuses on business logic
- No DOM structure

---

# View + ViewModel in action

<!-- todo: maybe create graphic for this -->

- View renders the state of the VM
  - Looks at properties on VM and renders accordingly
- User interacts with View (property/method)<!-- .element: class="fragment" data-fragment-index="1" -->
  - Causes a change on VM or View
- View updates <!-- .element: class="fragment" data-fragment-index="2" -->
  - Renders again due to changes on VM

---

# Custom Widget Best practices

How to build a custom UI for a widget?

  - Use widget viewModels to render custom UI
    - Watch properties state
    - Events
  - Use your preferred
    - Framework
    - CSS Library
    - Design System

---

# LayerList Widget

[![LayerList Widget](img/layerlist.png)](https://developers.arcgis.com/javascript/latest/sample-code/widgets-layerlist/)
- [Sample]((https://developers.arcgis.com/javascript/latest/sample-code/widgets-layerlist/))
- [SDK](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html)

---

# React + TypeScript

[React](https://reactjs.org/) is a JavaScript library for building user interfaces.

[TypeScript](http://www.typescriptlang.org/) is JavaScript with syntax for types.

---

# Create React App (CLI)

New Apps:
<pre data-id="code-animation"><code class="hljs" data-trim>
npx create-react-app my-app --template typescript

# or

yarn create react-app my-app --template typescript
</code></pre>

Existing Apps:
<pre data-id="code-animation"><code class="hljs" data-trim>
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# or

yarn add typescript @types/node @types/react @types/react-dom @types/jest
</code></pre>

---

## ArcGIS API for JavaScript

[JS API](https://developers.arcgis.com/javascript/latest/) + [ES modules](https://developers.arcgis.com/javascript/latest/tooling-intro/)

- [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/)
- [JSAPI esm samples](https://github.com/Esri/jsapi-resources/tree/master/esm-samples)

---


<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# React + Bootstrap

---


<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# React + Calcite Components

Take LayerList in React and add Calcite Components

---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Calcite: Esri's design system

- Visual language for products
  - Design guidelines
    - Color, Spacing, Typography...
  - Graphic resources (Icons, symbols, Figma UI Kit)
  - Interactive documentation
    - Patterns & best practices
  - Reusable components
- Closes the gap between designers and UI engineers
- [Documentation](https://developers.arcgis.com/calcite-design-system/)

---

# Calcite components

- [Web Components](https://developers.arcgis.com/calcite-design-system/components/) for Calcite Design System
  - 50+ web components
    - Ready to use
    - Reusable
    - Provides a library of patterns
  - Internal & external use
    - [Developer subscription](https://developers.arcgis.com/pricing/build-arcgis-solutions/)
  - Easily build beautiful consistent apps

---

# Benefits of Calcite

- Consistent UX
- Speed up development timelines
- Accessibility
- Web standards
- Framework integration

---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# About Web Components

- Custom elements
  - Browser-compatible elements
  - Use native APIs
  - DOM element lifecycle
- [Slotting](https://developers.arcgis.com/calcite-design-system/faq/#what-are-slots)
- Shadow DOM
  - Encapsulates component HTML & CSS
  - `<slot>` tag for distributing content

---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Calcite Design

![App Design](img/app-design.png)

---

# Design Components

![Design Component](img/pieces.png)

---

# PickList Calcite Component

[![PickList](img/pick-list.png)](https://developers.arcgis.com/calcite-design-system/components/pick-list/)

---

# Panel

[![Panel](img/panel.png)](https://developers.arcgis.com/calcite-design-system/components/panel/)

---

# Shell/Shell Panel

[![PickList](img/shell.png)](https://developers.arcgis.com/calcite-design-system/components/shell/)

---

# Calcite Components React

A set of React components that wrap Calcite Components

```
npm install --save @esri/calcite-components-react
```

---

# DEMO: React + Calcite Components

---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Resources

---
<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Questions? 🤔


---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

Please provide your feedback for this session by clicking on the session survey link directly below the video.
<!-- .element: style="margin: 0 20%;" -->

---

<!-- .slide: data-background="img/2022/dev-summit/bg-8.png" data-background-size="cover" -->

---

<h1 style="text-align: left; font-size: 48px;">Section Header</h1>
<p style="text-align: left; font-size: 24px; color: var(--r-section-subhead-color);">Section Subhead</p>

---

<h2 data-id="code-title">Code Example</h2>
<pre data-id="code-animation"><code class="hljs" data-trim data-line-numbers>
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  return (
    ...
  );
}
</code></pre>


