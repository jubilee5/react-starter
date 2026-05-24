import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // setShowItems(!showItems);
        setShowIndex(); // we are calling the setShowIndex function which is passed as a prop from the parent component. This function will update the showIndex state variable in the parent component with the index of the clicked category. This way we can manage the show/hide state of all the categories in one place which is the restaurant menu component.
    };

    // if the restaurant category had its own state variable to show or hide the items, then we would have to maintain a separate state variable for each restaurant category. This would make our code more complex and harder to maintain. Instead, we can lift the state up to the parent component and pass it down as props to the child component. This way, we can manage the state in one place and pass it down to all the child components that need it. This is a common pattern in React applications called "lifting state up". having its own state makes it a uncontrolled component. By lifting the state up to the parent component, we can make it a controlled component.

    return (
        <div>
            {/** Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">

                <div
                    className="flex justify-between cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="font-bold text-lg">
                        {data?.title} ({data?.itemCards?.length})
                    </span>

                    <span>⬇️</span>
                </div>

                {/** Accordion Body */}
                {showItems && (
                    <ItemList items={data?.itemCards} dummy={dummy} />
                )}

            </div>
        </div>
    );
};

export default RestaurantCategory;



// now the restaurant category component is a controlled component. The parent component will manage the state of showItems and pass it down as props to the restaurant category component. 