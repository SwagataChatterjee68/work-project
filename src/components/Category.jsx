
import { CiHeadphones } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
const Category = () => {
    const category = [
        { id: 1, name: "Phones", icon: <IoIosPhonePortrait /> },
        { id: 2, name: "Computers", icon: "computer" },
        { id: 3, name: "SmartWatch", icon: "watch" },
        { id: 4, name: "Camera", icon: "camera", active: true },
        { id: 5, name: "HeadPhones", icon: <CiHeadphones /> },
        { id: 6, name: "Gaming", icon: "game" },
    ];
    return (
        <div>{/* Browse by Category */}
            <div className="mb-10">
                <h2 className="text-lg font-bold mb-4">Browse By Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {category.map((cat) => (
                        <div
                            key={cat.id}
                            className={`flex flex-col items-center justify-center border rounded-md p-6 cursor-pointer transition ${cat.active
                                ? "bg-[#FF8400] text-white border-orange-500"
                                : "hover:border-orange-500"
                                }`}
                        >
                            <span className="text-3xl">{cat.icon}</span>
                            <p className="mt-2 text-sm font-medium">{cat.name}</p>
                        </div>
                    ))}
                </div>
            </div></div>
    )
}

export default Category