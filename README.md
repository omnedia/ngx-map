# ngx-map

<a href="https://ngxui.com" target="_blank" style="display: flex;gap: .5rem;align-items: center;cursor: pointer; padding: 0 0 0 0; height: fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width: 64px;height: 64px;">
</a>

This library is part of the NGXUI ecosystem. <br>
View all available components at https://ngxui.com

`@omnedia/ngx-map` is an Angular library for creating customizable, animated world maps with dotted grid layouts and path animations. Perfect for visualizing geographic connections, this component offers smooth animations and flexible configurations for diverse use cases.

## Features

- Dotted map generation with customizable shapes, colors, and grid styles.
- Path animations between points with configurable delays and durations.
- Responsive design with support for dark and light themes.
- Built-in sanitization for safe SVG rendering.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-map dotted-map
```

## Usage

Import the `NgxMapComponent` in your Angular module or component:

```typescript
import { NgxMapComponent } from '@omnedia/ngx-map';

@Component({
  ...
  imports: [NgxMapComponent],
  ...
})
```

Use the component in your template:

```html
<om-map
  [dots]="[
    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
    { start: { lat: 34.0522, lng: -118.2437 }, end: { lat: -1.2921, lng: 36.8219 } }
  ]"
  [lineColor]="'#0ea5e9'"
  [animated]="true"
  [mapColor]="'rgba(0, 0, 0, 0.4)'"
  [mapDotsShape]="'circle'"
  [mapDotsRadius]="0.22"
></om-map>
```

## How It Works

- **Customizable Dotted Map:** Generate maps with dots, specifying their shape, color, and radius.
- **Path Animations:** Define animated paths between points with adjustable timing.
- **Dynamic Theming:** The component adapts to dark or light themes via input properties.

## API

```html
<om-map
  [dots]="dots"
  [lineColor]="lineColor"
  [backgroundColor]="backgroundColor"
  [mapColor]="mapColor"
  [mapDotsShape]="mapDotsShape"
  [mapDotsRadius]="mapDotsRadius"
  [animated]="animated"
  [styleClass]="styleClass"
  [style]="style"
></om-map>
```

### Inputs:

- `dots` (required): Array of connection objects, each with `start` and `end` properties. Example:
  ```typescript
  [
    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } }
  ]
  ```
- `lineColor` (optional): Color of the animated lines. Defaults to `'#0ea5e9'`.
- `backgroundColor` (optional): Background color of the map. Defaults to `undefined`.
- `mapColor` (optional): Color of the dots on the map. Defaults to `'rgba(0,0,0,0.40)'`.
- `mapDotsShape` (optional): Shape of the dots (`'circle'` or `'hexagon'`). Defaults to `'circle'`.
- `mapDotsRadius` (optional): Radius of the dots. Defaults to `0.22`.
- `animated` (optional): Whether to animate the paths. Defaults to `false`.
- `styleClass` (optional): Custom CSS class for additional styling.

## Example

```html
<om-map
  [dots]="[
    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 40.7128, lng: -74.006 } },
    { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 35.6895, lng: 139.6917 } }
  ]"
  [lineColor]="'#ff5733'"
  [animated]="true"
  [mapColor]="'rgba(255, 87, 51, 0.4)'"
  [mapDotsShape]="'circle'"
  [mapDotsRadius]="0.3"
  styleClass="custom-map"
></om-map>
```

## Styling

`.om-map`

The `.om-map` container allows you to apply global or custom styles using the `styleClass` input. While the component handles dot placement and animations, you can extend styling for the map container or SVG elements.

### Example of Global and Custom Styling

```html

<om-map styleClass="custom-map">
</om-map>
```

```css
.custom-map {
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss new features or bug fixes.

## License

This project is licensed under the MIT License.

