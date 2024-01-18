// hooks chuyển đổi giá thành dạng chuỗi,
// bổ sung dấu chấm ngăn cách giữa các đơn vị
function useConverPrice() {
  function priceFormat(price) {
    // tham số price kiểu chuỗi -> chuyển thành kiểu number
    const result = +price;

    let priceProduct;
    if (typeof price === 'string') {
      priceProduct = result.toLocaleString('vi-VN');
    } else {
      priceProduct = price.toLocaleString('vi-VN');
    }
    return priceProduct;
  }
  return priceFormat;
}

export default useConverPrice;
