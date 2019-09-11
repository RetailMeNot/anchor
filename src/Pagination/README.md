# Pagination

The Pagination component is used to navigate between pages of results

## Notes

There are two ways to define the total number of pages. First, by setting the `totalPages` prop defines how many pages there are to tab between. Second, if you instead set the `totalResults` prop, then it'll calculate the number of total pages using the value of the `pageSize` prop.

Pagination can be "controlled" by defining the `current` prop to set the current page, rather than rely on internal state. This should be used in tandem with the `onChange` prop.
