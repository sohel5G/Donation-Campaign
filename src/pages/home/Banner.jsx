import PropTypes from 'prop-types';

const Banner = ({ getSearchValue }) => {

    const handleSearch = e => {
        e.preventDefault();
        getSearchValue(e.target.catSearch.value);
    }

    return (
        <div className="bg-[url('../../../public/images/Banner.png')] bg-no-repeat bg-cover bg-center">
            <div className="h-[300px] md:h-[400px] lg:h-[500px] flex justify-center items-center bg-white opacity-95">
                <div className="container mx-auto px-10 ">
                    <h1 className="text-3xl lg:text-5xl text-center font-bold py-10">I Grow By Helping People In Need</h1>
                    <form className="flex justify-center items-center" onSubmit={handleSearch}>
                        <input name="catSearch" className="border-2 py-2 px-4 bg-[#ffffff] rounded-l-md" type="text" placeholder="Search category..." />
                        <input className="bg-[#FF444A] py-2 px-4 text-white cursor-pointer rounded-r-md" type="submit" value="Search" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    getSearchValue: PropTypes.func.isRequired
}