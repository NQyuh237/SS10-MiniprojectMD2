import { ACT_ADD_CART, ACT_DECREASE_CART, ACT_INCREASE_CART } from "../contrains/actionTypes";

const initialState = JSON.parse(localStorage.getItem("carts")) || [];

/**
 * hàm lấy ra vị trí product trong list product
 * @param {*} id cần kiểm tra
 * @param {*} array mảng dùng để kiểm tra
 * @returns nếu tìm thấy bản ghi thì trả ra index, nếu không trả ra -1
 * Author: The Nam (08/09/2023)
 */
const findIndexProduct = (id, array) => {
    const productIndex = array.findIndex(pro => pro.product_id === id);
    return productIndex;
}

// hàm lưu dữ liệu lên local
const saveDataLocal = (array) => {
    localStorage.setItem("carts", JSON.stringify(array));
}

export const listCart = (state = initialState, action) => {
    switch (action.type) {
        case ACT_ADD_CART:
           
            // vị trí cần lấy
            const indexProduct = findIndexProduct(action.payload.product_id, state)

            // bước 2 kiểm tra sp có trong giỏ hay chưa
            if (indexProduct !== -1) {
                 // bước 1 clone vì có 2 trường hợp nên clone riêng biệt thì tốt hơn
                const newCarts = [...state];
                
                // nếu rồi tăng số lượng
                 newCarts[indexProduct].quantity += 1;

                // lưu lên local
                saveDataLocal(newCarts);

                // return mảng mới
                return newCarts;

            } else {
                // clone mảng cũ
                // chưa thì thêm vào giở
                const newAddCart = [...state, { ...action.payload, quantity: 1 }];

                // lưu lên local
                saveDataLocal(newAddCart);

                 // return mảng mới
                return newAddCart;
            }
        
        case ACT_INCREASE_CART:
            const increaseCarts = [...state];
            // lấy ra vị trí
            const updateIndex = findIndexProduct(action.payload, increaseCarts);
            // cập nhật lại quantity
            increaseCarts[updateIndex].quantity += 1;
            saveDataLocal(increaseCarts);

                // return mảng mới
                return increaseCarts;
        case ACT_DECREASE_CART:
            const decreaseCarts = [...state];
            const upIndex = findIndexProduct(action.payload, decreaseCarts);
            if (decreaseCarts[upIndex].quantity > 1) {
                // cập nhật lại quantity
                decreaseCarts[upIndex].quantity -= 1;
                saveDataLocal(decreaseCarts);
    
                    // return mảng mới
                    return decreaseCarts;
            } else {
                const productFilter = decreaseCarts.filter(
                    (product) => product.product_id !== action.payload);
                saveDataLocal(productFilter);
                return productFilter;
            }


        default:
            return state;
    }
    return state;
}