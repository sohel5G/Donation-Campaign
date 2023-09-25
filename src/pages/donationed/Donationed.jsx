import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donationed = ({ donationed }) => {
    const { id, img, category, title, price, txt_color, bg_color, cat_bg_color } = donationed;
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5 rounded-lg min-h-full' style={{ backgroundColor: bg_color }}>
            <div>
                <img className='w-full md:w-auto md:h-full rounded-l-lg' src={img} alt={title} />
            </div>
            <div className='col-span-2 flex items-center'>
                <div className='pt-2 pb-4 px-5 md:px-0'>
                    <span style={{ color: txt_color, backgroundColor: cat_bg_color }} className='px-2 inline-block rounded-md text-sm'>{category}</span>
                    <h1 style={{ color: 'black' }} className='font-semibold text-xl py-1'>{title}</h1>
                    <p style={{ color: txt_color,fontWeight:'600',paddingBottom:'12px' }}>{price}</p>
                    <Link style={{ backgroundColor: txt_color, fontSize:'12px',color:'white',padding:'6px 8px', borderRadius:'5px',fontWeight:'600',letterSpacing:'1px' }} to={`/donation/${id}`}> View Details </Link>
                </div>
            </div>
        </div>
    );
};

export default Donationed;

Donationed.propTypes = {
    donationed: PropTypes.object.isRequired
}

