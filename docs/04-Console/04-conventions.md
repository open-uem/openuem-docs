---
title: 🎨 User Interface Conventions
description: OpenUEM User Interface conventions
keywords:
  [
    IT assets,
    inventory,
    openuem,
    uem,
    rmm,
    console,
    ui,
    unified endpoint manager,
    remote monitoring and management,
  ]
---

# 🎨 User Interface Conventions

Before we talk about the different sections, let’s discuss some conventions about the user interface.

## 1. Tables

Most of the information in OpenUEM is displayed on tables with columns and rows.

### 1.1 Sorting and filtering

Next to a column’s name you can find two icons.

| Icons                                                                                                     | Description                                                                                                                |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![Sort icon alphabetically](/img/console/sort_alpha.png) ![Sort icon by date](/img/console/sort_date.png) | It allows you to sort the rows alphabetically or by date. You can click on it to change sort order (ascending, descending) |
| ![Filter icon](/img/console/filter.png) ![Applied filter icon](/img/console/filter_red.png)               | When clicked you can select some elements from the menu to filter results. If a filter is applied the icon is shown in red |

If a filter is applied you should find a button above the table that allows you to clear all filters.

![Clear filters](/img/console/clear_filters.png)

### 1.2 Items selection

Some tables offer the possibility to select several items:

- You can select item by item by clicking on the checkbox at the beginning of the row.
- You can select all items on the current page by clicking on the checkbox that is shown in the table’s header. If you click on that icon to uncheck, all the rows in that page will be unchecked.
- You can select all items on every page by clicking on the **Select all** button or deselect all items with the **Deselect all** button.
  Once you select some items, you’ll see that some buttons are enabled to apply an action on the selection.

![Selection example](/img/console/selection_example.png)

The number of selected items is updated with every selection and can be found next to the Select All and Deselect All buttons.

![Items selected](/img/console/items_selected.png)

### 1.3 Pagination

Information can be paginated.

You can specify the number of items per page using the dropdown menu

![Items per page](/img/console/items_per_page.png)

You navigate through the pages using the navigation bar. Next to it, you'll find the number of items displayed.

![Pagination example](/img/console/pagination.png)

## 2. Automatic refresh

Some pages are refreshed automatically where you'll find the following button. You can click on that button to perform a manual refresh.

![Automatic refresh](/img/console/refresh.png)

By default, the refresh time is set to 5 minutes. You can change that time in Admin -> General Settings

![Automatic refresh settings](/img/console/automatic_refresh_settings.png)

Now, let's start with the Agents section.

## 3. More actions

If you find three dots in table’s rows, that’s a button that offers more actions to perform on the element enclosed in that row.

![Three dots](/img/console/three_dots.png)

## 4. Go back

You can use the back button of your browser to go back to a previous page or section. OpenUEM is not a [Single Page Application](https://developer.mozilla.org/en-US/docs/Glossary/SPA) and uses [HTMX](https://htmx.org/) to build an user interface with hypertext.
