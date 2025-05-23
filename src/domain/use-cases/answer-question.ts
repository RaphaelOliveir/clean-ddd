import { Answer } from "../entities/answer";
import { AnswerRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {

    constructor(
        private readonly answersRepository: AnswerRepository,
    ) {}

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
        content,
        questionId,
        authorId: instructorId,
    });

    await this.answersRepository.create(answer)

    return answer;
  }
}
