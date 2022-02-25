<!-- .slide: data-background="img/2022/dev-summit/bg-1.png" data-background-size="cover" -->

<h1 style="text-align: left; font-size: 80px;"><div><small>ArcGIS API for JavaScript:</small></div> Build a custom UI for API widgets</h1>
<p style="text-align: left; font-size: 30px; color: var(--r-section-subhead-color);">Matt Driscoll, Ryan Libed</p>
<p style="text-align: left; font-size: 30px;">Slides: <a href="https://esriurl.com/ds2022-custom-ui"><code>esriurl.com/ds2022-custom-ui</code></a></p>

---

# Agenda

- Introduction
- Widget fundamentals
- Creating custom widget UI
  - React
  - React + Bootstrap
  - React + Calcite Design System
- Resources
- Q & A

---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Introduction

---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Widget Fundamentals

---

# What are widgets?

- Component of UI
- Perform a function
- Interactive
- Stateful

---

# Why use widgets?

- Reusable
- Modular
- Configurable
- Help build more complex apps

---

# Widget Composition

Widgets are composed of Views & ViewModels

- Logic is separate from presentation
- Reusable
- UI replacement
- Framework integration

---

# Views

Presentation of the widget

- Extend `esri/widgets/Widget`
- Use ViewModel APIs to render the UI
- Focus on UI
- DOM structure

---

# ViewModels

Business logic of the widget

- Extend `esri/core/Accessor`
- Provide APIs to support View
- Focus on business logic
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

# Building custom UI

- Use viewModels to render custom UI

---

# Developer environment

JS API + [TypeScript](http://www.typescriptlang.org/) + [ES modules](https://developers.arcgis.com/javascript/latest/tooling-intro/)

- [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/)
- [JSAPI esm samples](https://github.com/Esri/jsapi-resources/tree/master/esm-samples)

---

# React

---


<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# React + Bootstrap

---


<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# React + Calcite Components

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


