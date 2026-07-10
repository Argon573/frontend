import useHandleInput from "../../../hooks/useHandleInput.js";

const Authorization = () => {


    const loginInput = useHandleInput();

    return (
        <div>
            <div className="authorization flex justify-center items-center flex-col gap-4">
                <input
                    className="form-control authorization-input border border-black rounded-2xl placeholder:indent-2 indent-2"
                    placeholder="Login"
                    type={loginInput.inputType}
                    value={loginInput.value}
                    onChange={loginInput.onChange}
                />
                <input
                    type={"password"}
                    className="form-control border border-black rounded-2xl placeholder:indent-2"
                    placeholder="Password" />
            </div>
        </div>
    )
}

export default Authorization;


// TODO validation