

const Grocery = () => {
  return (
    <div>
    <h2>
        {" "}
        Our Grocery Store is open. We have all the fresh vegetables and fruits you need. We also have a wide variety of snacks and beverages. We are open from 8am to 10pm every day. We also have a home delivery service. You can order online or call us to place your order. We are located at 123 Main Street, Anytown, USA. We hope to see you soon!{" "}

    </h2>
      <p>
 Assume we have a lot of child components in the grocery component and we want to load them only when the user clicks on the grocery link in the header. This will help in improving the performance of the application by reducing the initial load time. We can use React.lazy and Suspense to implement lazy loading in our application. We can also use dynamic import() to load the components dynamically when they are needed.
      </p> 
    </div>
  )
}

export default Grocery
