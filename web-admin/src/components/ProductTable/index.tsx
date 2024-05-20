import {
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'

const ProductTable = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProductItems(data.data);
      } catch (error: unknown) {
        console.log(`Error while fetching products: ${error}`);
      }
    };
    const fetchDebounce = setTimeout(() => {
      fetchProducts();
    }, 1000);

    return () => {
      clearTimeout(fetchDebounce);
    };
  }, []);

  const status = (statusId: number) => {
    switch (statusId) {
      case 1:
        return "Sale";
      case 2:
        return "In Stock";
      case 3:
        return "Out of Stock";
      default:
        return "N/A";
    }
  };

  return (
    <CCard>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Description</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">Purchase Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Warranty Period</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {productItems && productItems.length > 0
              ? productItems.map((item: any, index: any) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell>{item.description ? item.description : "N/A"}</CTableDataCell>
                    <CTableDataCell>{status(item.status)}</CTableDataCell>
                    <CTableDataCell>{item.purchaseDate ? item.purchaseDate : "N/A"}</CTableDataCell>
                    <CTableDataCell>{item.warrantyPeriod} months</CTableDataCell>
                    <CTableDataCell>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {}}
                      >
                        <CIcon icon={cilOptions} />
                      </button>
                    </CTableDataCell>
                  </CTableRow>
                ))
              : null}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default ProductTable;
