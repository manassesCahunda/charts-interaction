import * as React from "react";

const languages = {
  "European Languages": [
    { "value": "en", "label": "English" },
    { "value": "fr", "label": "French" },
    { "value": "de", "label": "German" },
    { "value": "es", "label": "Spanish" }
  ],
  "Asian Languages": [
    { "value": "zh", "label": "Chinese" },
    { "value": "ja", "label": "Japanese" },
    { "value": "ru", "label": "Russian" },
    { "value": "ar", "label": "Arabic" }
  ]
};

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default  function Language() {
  return (
    <Select>
      <SelectTrigger className="w-[40px]">
        <SelectValue placeholder="lg" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([category, items]) => (
          <SelectGroup key={category}>
            <SelectLabel>{category}</SelectLabel>
            {items.map(language => (
              <SelectItem key={language.value} value={language.value}>
                {language.value}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
