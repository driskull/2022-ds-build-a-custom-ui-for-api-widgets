<!-- .slide: data-background="img/2022/dev-summit/bg-1.png" data-background-size="cover" -->

<h1 style="text-align: left; font-size: 80px;"><div><small>ArcGIS API for JavaScript:</small></div> Build a custom UI for API widgets</h1>
<p style="text-align: left; font-size: 30px; color: var(--r-section-subhead-color);">Matt Driscoll, Ryan Libed</p>
<p style="text-align: left; font-size: 30px;">Slides: <a href="https://esriurl.com/ds2022-custom-ui"><code>esriurl.com/ds2022-custom-ui</code></a></p>

---

# Agenda

- Developer environment setup
- Widget fundamentals
- Creating custom widget UI
  - React
  - React + Bootstrap
  - React + Calcite Design System
- Resources
- Q & A

---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Developer environment setup

---

# Developer environment

<!-- background: section/content will tie into widget dev -->
<!-- background: including TS in all steps because it's needed for widget dev -->

JS API + [TypeScript](http://www.typescriptlang.org/)

---

# IDE Support

- Visual Studio Code
- WebStorm
- Sublime Text
- and more!

---

<!-- .slide: data-background="img/2022/dev-summit/bg-3.png" data-background-size="cover" -->

# Demo: [Dev Environment](../demos/1-setup/)

- [JSAPI esm samples](https://github.com/Esri/jsapi-resources/tree/master/esm-samples)
- [Typescript setup](https://developers.arcgis.com/javascript/latest/typescript-setup/)

---

<!-- .slide: data-background="img/2022/dev-summit/bg-3.png" data-background-size="cover" -->

# Demo Recap: Dev Environment

- Install of TypeScript + JS API typings
- Built simple mapping application

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
- Help build more complex apps

---

# Architecture

- Views + ViewModels
  - Separation of concerns
  - UI replacement
  - Easier integration

---

# Views

- Extend `esri/widgets/Widget`
- Rely on ViewModel
- Focus on UI

---

# ViewModels

- Extend `esri/core/Accessor`
- Provide APIs to support View
- Focus on business logic

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

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

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


