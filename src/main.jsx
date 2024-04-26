import React from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from 'react-hook-form';

function FormYTe () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert("Khai báo thành công!");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: 300}}>
            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'name'}>
                    Họ tên
                </label>
                {" "}
                <input id={`name`} type="text"  {...register("name", {required: "Cần thiết"})} />
                {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'cmnd'}>
                    Số hộ chiếu /CMND
                </label>
                {" "}
                <input id={`cmnd`} type="text"  {...register("cmnd", {required: "Cần thiết"})} />
                {errors.cmnd && <span style={{ color: 'red' }}>{errors.cmnd.message}</span>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'Birth'}>
                    Năm sinh
                </label>
                {" "}
                <input id={`Birth`} type="number"  {...register("yob", { required: "Cần thiết", min: { value: 1900, message: "Năm sinh tối thiểu là 1900" } })} />
                {errors.yob && <span style={{ color: 'red' }}>{errors.yob.message}</span>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <div>
                    <label htmlFor={`male`}>
                        Nam
                    </label>
                    {" "}
                    <input defaultChecked id={`male`} {...register("gender")} type="radio" value="male"/>
                </div>
                <div>
                    <label htmlFor={`female`}>
                        Nữ
                    </label>
                    {" "}
                    <input id={`female`} {...register("gender")} type="radio" value="female"/>
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'nation'}>
                    Quốc tịch
                </label>
                {" "}
                <input id={`nation`} type="text"  {...register("nation", {required: "Cần thiết"})} />
                {errors.nation && <span style={{ color: 'red' }}>{errors.nation.message}</span>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'company'}>
                    Công ty làm việc
                </label>
                {" "}
                <input id={`company`} type="text" {...register("company", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'department'}>
                    Bộ phận làm việc
                </label>
                {" "}
                <input id={`department`} type="text"  {...register("department", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'insurance'}>
                    Có thẻ bảo hiểm y tế
                </label>
                {" "}
                <input id={`insurance`} type="checkbox"  {...register("insurance", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'city'}>
                    Tỉnh thành
                </label>
                {" "}
                <input id={`city`} type="text"  {...register("city", {required: "Cần thiết"})} />
                {errors.city && <span style={{ color: 'red' }}>{errors.city.message}</span>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'district'}>
                    Quận /huyện
                </label>
                {" "}
                <input id={`district`} type="text"  {...register("district", {required: "Cần thiết"})} />
                {errors.district && <span style={{ color: 'red' }}>{errors.district.message}</span>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'wards'}>
                    Phường /xã
                </label>
                {" "}
                <input id={`wards`} type="text"  {...register("wards", {required: "Cần thiết"})} />
                {errors.wards && <span style={{ color: 'red' }}>{errors.wards.message}</span>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'apartment_number'}>
                    Số nhà, phố, tổ dân phố /thôn /đội
                </label>
                {" "}
                <input id={`apartment_number`} type="text"
                        {...register("apartment_number", {required: "Cần thiết"})} />
                {errors.apartment_number && <span style={{ color: 'red' }}>{errors.apartment_number.message}</span>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'phone'}>
                    Điện thoại
                </label>
                {" "}
                <input id={`phone`} type="text"  {...register("phone", {required: "Cần thiết"})} />
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 10}}>
                <label htmlFor={'email'}>
                    Email
                </label>
                {" "}
                <input id={`email`}  {...register("email", {required: "Cần thiết", pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email không đúng định dạng"
                    }})} />
                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
            </div>

            <h4>
                Trong 14 ngày qua, Anh / Chị có thấy xuất hiện dấu hiệu nào sau đây không?
            </h4>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <textarea {...register("Go", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'fever'}>
                    Sốt
                </label>
                {" "}
                <input id={`fever`} type="checkbox"  {...register("fever", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'cough'}>
                    Ho
                </label>
                {" "}
                <input id={`cough`} type="checkbox"  {...register("cough", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'shortness_of_breath'}>
                    Khó thở
                </label>
                {" "}
                <input id={`shortness_of_breath`} type="checkbox"
                        {...register("shortness_of_breath", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'pneumonia'}>
                    Viêm phổi
                </label>
                {" "}
                <input id={`pneumonia`} type="checkbox"  {...register("pneumonia", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'sore_throat'}>
                    Đau họng
                </label>
                {" "}
                <input id={`sore_throat`} type="checkbox"  {...register("sore_throat", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'tired'}>
                    Mệt mỏi
                </label>
                {" "}
                <input id={`tired`} type="checkbox"  {...register("tired", {})} />
            </div>

            <h4>
                Trong 14 ngày qua, Anh / Chị có tiếp xúc với
            </h4>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'contact_with_sick_people'}>
                    Người bệnh hoặc nghi ngờ mắc bệnh COVID-19
                </label>
                {" "}
                <input id={`contact_with_sick_people`} type="checkbox"
                        {...register("contact_with_sick_people", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'national_exposure'}>
                    Người từ nước ngoài có bệnh COVID-19
                </label>
                {" "}
                <input id={`national_exposure`} type="checkbox"
                        {...register("national_exposure", {})} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                <label htmlFor={'expression'}>
                    Người có biểu hiện (Sốt, ho, khó thở, view phổi)
                </label>
                {" "}
                <input id={`expression`} type="checkbox"  {...register("expression", {})} />
            </div>


            <input type="submit"/>
        </form>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FormYTe/>
    </React.StrictMode>,
)
