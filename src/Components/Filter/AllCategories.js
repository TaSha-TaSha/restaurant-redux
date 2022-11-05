import Filter from "./Filter";

const AllCategories = () => {
    return(<div>
        <h1>What kind of food do you like?</h1>
        {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL']
        .map( (element, index) => (<Filter category={element} key={index} />))}
    </div>)
}

export default AllCategories;


// здесь используем метод map, чтобы отобразить все categories в компоненте filter, через пропс