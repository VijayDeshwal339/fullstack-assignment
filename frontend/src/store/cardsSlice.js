import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await fetch('http://localhost:5000/cards');
  const data = await response.json();
  return data;
});

export const addCard = createAsyncThunk('cards/addCard', async (card) => {
  const response = await fetch('http://localhost:5000/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
  const newCard = await response.json();
  return newCard;
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.cards.push(action.payload);
      });
  },
});

export default cardsSlice.reducer;
