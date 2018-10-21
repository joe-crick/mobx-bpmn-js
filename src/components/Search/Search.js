import React from "react";

const SearchInput = ({
  searchTerm,
  setSearchTerm,
  placeholder,
  propName = "searchTerm",
  formId = "search-form",
  inputId = "search",
  children
}) => (
  <div>
    <form id={formId}>
      <input
        id={inputId}
        type="search"
        data-prop={propName}
        value={searchTerm}
        placeholder={placeholder}
        onChange={setSearchTerm}
      />
    </form>
    <output htmlFor={inputId} form={formId}>
      {children}
    </output>
  </div>
);

export default SearchInput;
