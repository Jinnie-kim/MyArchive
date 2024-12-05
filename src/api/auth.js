import supabase from '../supabase/supabaseClient';

export const signup = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) throw error;

    return {
      success: true,
      message: '회원가입 성공',
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};

export const signin = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) throw error;

    return {
      success: true,
      message: '로그인 성공',
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};

export const signout = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    return {
      success: true,
      message: '로그아웃 되었습니다.',
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
