"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConditionRepository {
    constructor() { }
    static getConditionRepository() {
        if (!ConditionRepository.instance) {
            return new ConditionRepository();
        }
        return ConditionRepository.instance;
    }
    getOneCondition() {
        return 'One condition!';
    }
    getAllCondition() {
        return 'All conditions!';
    }
}
exports.default = ConditionRepository.getConditionRepository();
