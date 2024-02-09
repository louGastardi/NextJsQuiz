'use client';
import { createContext, useState } from 'react';

export const usernameContext = createContext({});
export const userAnswerContext = createContext( {const [userRightAnswer, setUserRightAnswer] = useState(0)} );

