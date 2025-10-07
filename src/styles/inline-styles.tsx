/*
DCE - Front
==================================
Constantes contenant les styles utilisés dans les composants React.
*/

import React from 'react';
import { Theme } from '@mui/material';
import { StylesConfig } from 'react-select';

export const formStyles: { [key: string]: React.CSSProperties } = {
  // Styles pour les champs d'entrée de formulaire
  input: {
      width: '260px',
      marginBottom: '10px'
  }
};

export const dialogStyles: { [key: string]: React.CSSProperties } = {
  // Styles pour les fenêtres pop-up d'alertes
  dialogSelector: {
      marginBottom: '20px',
      marginTop: '15px',
      display: 'flex',
      flexDirection: 'row',
      gap: '5px',
      justifyContent: 'center'
  }
};

type OptionType = { value: number; label: string };

// Custom styles for multi-select (isMulti=true).
export const customMultiSelectStyles = (theme: Theme): StylesConfig<OptionType, true> => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white', // DSFR dark mode background
    borderColor: theme.palette.divider,
    minHeight: '56px',
    boxShadow: state.isFocused ? `0 0 0 1px ${theme.palette.primary.main}` : provided.boxShadow,
  }),
  singleValue: (provided) => ({ ...provided, color: theme.palette.text.primary }),
  // DSFR doesn’t provide a multiValue style, but you can mimic it using the action.selected color.
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: theme.palette.action.selected,
  }),
  placeholder: (provided) => ({ ...provided, color: theme.palette.text.secondary }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme.palette.background.paper, // DSFR menu background
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? theme.palette.action.selected
      : state.isFocused
      ? theme.palette.action.hover
      : theme.palette.background.paper, // DSFR default background
    color: theme.palette.text.primary,
  }),
});

// Custom styles for single-select (isMulti=false).
export const customSingleSelectStyles = (theme: Theme): StylesConfig<OptionType, false> => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white', // DSFR dark mode background
    borderColor: theme.palette.divider,
    minHeight: '56px',
    boxShadow: state.isFocused ? `0 0 0 1px ${theme.palette.primary.main}` : provided.boxShadow,
  }),
  singleValue: (provided) => ({ ...provided, color: theme.palette.text.primary }),
  placeholder: (provided) => ({ ...provided, color: theme.palette.text.secondary }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme.palette.background.paper, // DSFR menu background
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? theme.palette.action.selected
      : state.isFocused
      ? theme.palette.action.hover
      : theme.palette.background.paper, // DSFR default background
    color: theme.palette.text.primary,
  }),
});
