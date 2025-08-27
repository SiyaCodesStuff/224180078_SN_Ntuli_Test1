Component Design and Data Flow:

<App>
   └── <ProductList>
         └── <ProductCard>
   └── <ProductDetail>


App is the root component.

ProductList and ProductDetail are both direct children of App (they are siblings to each other).

ProductCard is a child of ProductList (and a grandchild of App).