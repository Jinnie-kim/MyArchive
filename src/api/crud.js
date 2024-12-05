import supabase from '../supabase/supabaseClient';

// Insert data
export const insertData = async (type, title, body, user_id) => {
  try {
    const { error } = await supabase.from('archives').insert({ type, title, body, user_id });
    if (error) throw error;

    return {
      success: true,
      message: '데이터 저장 완료되었습니다.',
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
