class ConditionRepository {
  // implement singleton pattern
  private static instance: ConditionRepository;

  private constructor() {}
  public static getConditionRepository(): ConditionRepository {
    if (!ConditionRepository.instance) {
      return new ConditionRepository();
    }
    return ConditionRepository.instance;
  }
  public getOneCondition() {
    return 'One condition!';
  }

  public getAllCondition() {
    return 'All conditions!';
  }
}

export default ConditionRepository.getConditionRepository();
