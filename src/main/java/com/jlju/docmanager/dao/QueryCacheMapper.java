package com.jlju.docmanager.dao;

import com.jlju.docmanager.bean.QueryCache;
import com.jlju.docmanager.bean.QueryCacheExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface QueryCacheMapper {
    int countByExample(QueryCacheExample example);

    int deleteByExample(QueryCacheExample example);

    int deleteByPrimaryKey(Integer cacheId);

    int insert(QueryCache record);

    int insertSelective(QueryCache record);

    List<QueryCache> selectByExample(QueryCacheExample example);

    QueryCache selectByPrimaryKey(Integer cacheId);

    int updateByExampleSelective(@Param("record") QueryCache record, @Param("example") QueryCacheExample example);

    int updateByExample(@Param("record") QueryCache record, @Param("example") QueryCacheExample example);

    int updateByPrimaryKeySelective(QueryCache record);

    int updateByPrimaryKey(QueryCache record);


}