import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donation = ({ donation }) => {

    const { id, img, category, title, txt_color, bg_color, cat_bg_color } = donation;

    return (
        <>
            <Link to={`/donation/${id}`}>
                <div style={{ backgroundColor: bg_color }} className='rounded-lg'>
                    <img className='w-full' src={img} alt={title} />
                    <div className='py-2 px-4'>
                        <span style={{ color: txt_color, backgroundColor: cat_bg_color }} className='py-1 px-2 my-3 inline-block rounded-md text-sm'>{category}</span>
                        <h1 style={{ color: txt_color }} className='font-semibold text-lg'>{title}</h1>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Donation;

Donation.propTypes = {
    donation: PropTypes.object.isRequired
}

