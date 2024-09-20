___TERMS_OF_SERVICE___

By creating or modifying this file you agree to Google Tag Manager's Community
Template Gallery Developer Terms of Service available at
https://developers.google.com/tag-manager/gallery-tos (or such other URL as
Google may provide), as modified from time to time.


___INFO___

{
  "type": "MACRO",
  "id": "cvt_temp_public_id",
  "version": 1,
  "securityGroups": [],
  "displayName": "Ecommerce Parameter Generator",
  "description": "",
  "containerContexts": [
    "WEB"
  ]
}


___TEMPLATE_PARAMETERS___

[
  {
    "type": "TEXT",
    "name": "orderItems",
    "displayName": "Array of Objects",
    "simpleValueType": true,
    "help": "For example, this can be Items array from enhanced ecommerce variable."
  },
  {
    "type": "SELECT",
    "name": "task",
    "displayName": "What to return",
    "macrosInSelect": false,
    "selectItems": [
      {
        "value": "meta",
        "displayValue": "Meta Ecommerce Parameters"
      },
      {
        "value": "tiktok",
        "displayValue": "TikTok Ecommerce Parameters"
      },
      {
        "value": "pinterest",
        "displayValue": "Pinterest Ecommerce Parameters"
      },
      {
        "value": "ids",
        "displayValue": "content_ids [ ]"
      },
      {
        "value": "name",
        "displayValue": "content_name \u0027 \u0027"
      },
      {
        "value": "numitems",
        "displayValue": "num_items"
      },
      {
        "value": "value",
        "displayValue": "value"
      },
      {
        "value": "contents",
        "displayValue": "contents [ {} ]"
      }
    ],
    "simpleValueType": true
  },
  {
    "type": "GROUP",
    "name": "keyGroup",
    "displayName": "Array Keys",
    "groupStyle": "ZIPPY_OPEN_ON_PARAM",
    "subParams": [
      {
        "type": "TEXT",
        "name": "keyId",
        "displayName": "Item ID",
        "simpleValueType": true
      },
      {
        "type": "TEXT",
        "name": "keyNm",
        "displayName": "Item Name",
        "simpleValueType": true
      },
      {
        "type": "TEXT",
        "name": "keyPr",
        "displayName": "Item Price",
        "simpleValueType": true
      },
      {
        "type": "TEXT",
        "name": "keyQt",
        "displayName": "Item Quantity",
        "simpleValueType": true
      }
    ]
  }
]


___SANDBOXED_JS_FOR_WEB_TEMPLATE___

const copyFromDataLayer = require('copyFromDataLayer');

let meta = '';
let tiktok = '';
let pinterest = '';
let content_name = '';
let content_ids = [];
let contents = [];
let num_items = 0;
let value = 0;

const arr = data.orderItems || [];
const task = data.task || '';

const keyId = data.keyId || 'item_id';
const keyPr = data.keyPr || 'price';
const keyNm = data.keyNm || 'item_name';
const keyQt = data.keyQt || 'quantity';


if (arr.length) {
  if (task === 'name') {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        content_name = arr[0][keyNm] || arr[0][keyId];
      } else {
        content_name = content_name + ', ' + (arr[i][keyNm] || arr[i][keyId]);
      }
    }
    return content_name || '';
  }

  if (task === 'contents') {
    for (let i = 0; i < arr.length; i++) {
      let id = arr[i][keyId] || arr[i][keyNm];
      let name = arr[i][keyNm] || arr[i][keyId];
      let quantity = arr[i][keyQt];
      if (quantity == null || quantity === '') quantity = 1;
      let item_price = arr[i][keyPr];
      if (item_price == null || item_price === '') item_price = 0;

      contents.push({
        'id': id,
        'name': name,
        'quantity': quantity,
        'item_price': item_price
      });
    }
    return contents;
  }

  if (task === 'ids') {
    for (let i = 0; i < arr.length; i++) {
      let id = arr[i][keyId] || arr[i][keyNm];
      content_ids.push(id);
    }
    return content_ids;
  }

  if (task === 'numitems') {
    for (let i = 0; i < arr.length; i++) {
      let quantity = arr[i][keyQt];
      if (quantity == null || quantity === '') quantity = 1;
      num_items = num_items + quantity;
    }
    return num_items;
  }

  if (task === 'value') {
    for (let i = 0; i < arr.length; i++) {
      let quantity = arr[i][keyQt];
      if (quantity == null || quantity === '') quantity = 1;
      let item_price = arr[i][keyPr];
      if (item_price == null || item_price === '') item_price = 0;
      value = value + quantity * item_price;
    }
    return value;
  }

  if (task === 'meta') {
    for (let i = 0; i < arr.length; i++) {
      let id = arr[i][keyId] || arr[i][keyNm];
      let name = arr[i][keyNm] || arr[i][keyId]; 
      let quantity = arr[i][keyQt];
      if (quantity == null || quantity === '') quantity = 1;
      let item_price = arr[i][keyPr];
      if (item_price == null || item_price === '') item_price = 0;

      contents.push({
        'id': id,
        'name': name, 
        'quantity': quantity,
        'item_price': item_price
      });

      content_ids.push(id);
      value += quantity * item_price;
    }

    content_name = contents.map(item => item.name).join(', ');

    meta = {
      order_id: copyFromDataLayer("ecommerce.transaction_id"),
      content_ids: content_ids,
      content_name: content_name,
      content_type: 'product',
      value: value,
      contents: contents,
      currency: copyFromDataLayer("ecommerce.currency"),
      tax: copyFromDataLayer("ecommerce.tax"),
      shipping: copyFromDataLayer("ecommerce.shipping"),
      coupon: copyFromDataLayer("ecommerce.coupon")
    };
    return meta;
  }


  if (task === 'tiktok') {
    for (let i = 0; i < arr.length; i++) {
      let id = arr[i][keyId] || arr[i][keyNm];
      let name = arr[i][keyNm] || arr[i][keyId];
      let quantity = arr[i][keyQt];
      if (quantity == null || quantity === '') quantity = 1;
      let item_price = arr[i][keyPr];
      if (item_price == null || item_price === '') item_price = 0;

      contents.push({
        'content_id': id,
        'content_name': name,
        'content_category': arr[i].item_category || "",
        'content_type': 'product',
        'brand': arr[i].item_brand || "",
        'price': item_price.toString(),
        'quantity': quantity.toString()
      });

      content_ids.push(id);
      value += quantity * item_price;
    }

    content_name = contents.map(item => item.content_name).join(', ');

    tiktok = {
      content_type: 'product',
      contents: contents,
      currency: copyFromDataLayer("ecommerce.currency"),
      order_id: copyFromDataLayer("ecommerce.transaction_id"),
      tax: copyFromDataLayer("ecommerce.tax"),
      shipping: copyFromDataLayer("ecommerce.shipping"),
      coupon: copyFromDataLayer("ecommerce.coupon")
    };
    return tiktok;
  }

  if (task === 'pinterest') {
    for (let i = 0; i < arr.length; i++) {
      let id = arr[i][keyId] || arr[i][keyNm];
      let name = arr[i][keyNm] || arr[i][keyId];
      let quantity = arr[i][keyQt];
      if (quantity == null || quantity === '') quantity = 1;
      let item_price = arr[i][keyPr];
      if (item_price == null || item_price === '') item_price = 0;

      contents.push({
        'product_id': id,
        'product_name': name,
        'product_category': arr[i].item_category || "",
        'quantity': quantity,
        'item_price': item_price
      });

      content_ids.push(id);
      value += quantity * item_price;
    }

    content_name = contents.map(item => item.product_name).join(', ');

    pinterest = {
      order_id: copyFromDataLayer("ecommerce.transaction_id"),
      value: value,
      currency: copyFromDataLayer("ecommerce.currency"),
      line_items: contents
    };
    return pinterest;
  }
}

return task === 'name' ? '' : [];


___WEB_PERMISSIONS___

[
  {
    "instance": {
      "key": {
        "publicId": "read_data_layer",
        "versionId": "1"
      },
      "param": [
        {
          "key": "allowedKeys",
          "value": {
            "type": 1,
            "string": "any"
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  }
]


___TESTS___

scenarios: []


___NOTES___

Created on 9/7/2024, 12:44:27 PM


