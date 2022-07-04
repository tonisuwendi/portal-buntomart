import menu from '../../data/dummy/menu';
import MenuItem from './MenuItem';

export default function Menu() {
    return (
        <div className="ml-16">
            <ul className="flex">
                {menu.map((item) => (
                    <MenuItem key={item.id} title={item.title} slug={item.slug} />
                ))}
            </ul>
        </div>
    );
}
