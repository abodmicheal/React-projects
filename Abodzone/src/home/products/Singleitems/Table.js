import React from "react";

export default function CustomizedTables({
  brand,
  os,
  condition,
  mNumber,
  screenSize,
  ram,
  camera,
  processorT,
  processorS,
}) {
  return (
    <div>
      <table class="table-striped">
        <tbody>
          {brand !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">Brand</td>
              <td class="s-padding-ends s-padding-sides">
                <div>{brand}</div>
              </td>
            </tr>
          )}
          {os !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">Operating System</td>
              <td class="s-padding-ends s-padding-sides">
                <div>{os}</div>
              </td>
            </tr>
          )}
          {brand !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">Manufacturer</td>
              <td class="s-padding-ends s-padding-sides">
                <div>{brand}</div>
              </td>
            </tr>
          )}
          {condition !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">Condition</td>
              <td class="s-padding-ends s-padding-sides">
                <div>{condition}</div>
              </td>
            </tr>
          )}
          {mNumber !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">
                Manufacturer Part Number
              </td>
              <td class="s-padding-ends s-padding-sides">
                <div>{mNumber}</div>
              </td>
            </tr>
          )}
          {screenSize !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">Screen Size</td>
              <td class="s-padding-ends s-padding-sides">
                <div>{screenSize}</div>
              </td>
            </tr>
          )}
          {ram !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">RAM Memory</td>
              <td class="s-padding-ends s-padding-sides">
                <div>{ram}</div>
              </td>
            </tr>
          )}
          {camera !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">
                Rear-Facing Camera Megapixels
              </td>
              <td class="s-padding-ends s-padding-sides">
                <div>{camera}</div>
              </td>
            </tr>
          )}
          {processorT !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">Processor Type</td>
              <td class="s-padding-ends s-padding-sides">
                <div>{processorT}</div>
              </td>
            </tr>
          )}
          {processorS !== undefined && (
            <tr class="product-specification-row">
              <td class="s-padding-ends s-padding-sides">Processor Speed</td>
              <td class="s-padding-ends s-padding-sides">
                <div>{processorS}</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
