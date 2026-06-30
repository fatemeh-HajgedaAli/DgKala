import { createContext, useContext, useReducer, useEffect } from "react";

// load from localStorage
const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadCart(),
};

// reducer
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;

      const existing = state.items.find((i) => i.id === product.id);

      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...product,
            qty: 1,
          },
        ],
      };
    }

    case "INCREASE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i,
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        items: state.items
          .map((i) => (i.id === action.payload ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}

// context
const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// hook
export const useCart = () => useContext(CartContext);
