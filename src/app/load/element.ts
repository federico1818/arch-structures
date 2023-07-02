import { Material } from "src/app/shared/models/material";
import { Measurement } from "src/app/shared/models/measurement";

export interface Element {
    material: Material
    thickness: Measurement
}
