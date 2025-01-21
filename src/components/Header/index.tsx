import Cookies from "js-cookie";
import Button from "../Button";
import {jwtDecode} from "jwt-decode";

export const Header = () => {
    const token = Cookies.get("auth_token"); 
    const user = token ? jwtDecode(token) : null

    return (
        <div className="bg-white shadow-[0_2px_12px_0_rgba(11,22,44,0.05)]">
           <div className="flex justify-between items-center p-4">
                <Button className="py-2">
                    Add Goal
                </Button>
                <p className="text-lg">Welcome, <span className="font-semibold">{user?.name}</span></p>
            </div>
        </div>
    );
};
